import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./newproject.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import Loading from "../layout/Loading";
import Message from "../layout/Message";

function EditService() {
  const { projectid, serviceid } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [service, setService] = useState({});
  const [message, setMessage] = useState("");
  const [type, setType] = useState("success");

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${projectid}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        const found = data.services.find((s) => s.id === serviceid);
        if (found) setService(found);
      })
      .catch((err) => console.log(err));
  }, [projectid, serviceid]);

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("");

    // recalculate cost: subtract old service cost, add new
    const oldService = project.services.find((s) => s.id === serviceid);
    const oldCost = Number(oldService.cost);
    const newCost = Number(service.cost);
    const updatedTotal = Number(project.cost) - oldCost + newCost;

    if (updatedTotal > Number(project.budget)) {
      setMessage("This cost exceeds the project budget!");
      setType("error");
      return;
    }

    const updatedServices = project.services.map((s) =>
      s.id === serviceid ? { ...s, ...service } : s
    );

    const updatedProject = {
      ...project,
      services: updatedServices,
      cost: updatedTotal,
    };

    fetch(`http://localhost:5000/projects/${projectid}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProject),
    })
      .then((resp) => resp.json())
      .then(() => {
        navigate(`/project/${projectid}`, {
          state: { message: "Service updated successfully" },
        });
      })
      .catch((err) => console.log(err));
  }

  if (!project) return <Loading />;

  return (
    <div className={styles.newproject_container}>
      <h1>Edit Service</h1>
      <p>Update the details of this service</p>
      {message && <Message type={type} msg={message} />}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          text="Service Name"
          name="name"
          placeholder="Service name"
          hanleOnChange={handleChange}
          value={service.name || ""}
        />
        <Input
          type="number"
          text="Cost of Service"
          name="cost"
          placeholder="Service cost"
          hanleOnChange={handleChange}
          value={service.cost || ""}
        />
        <Input
          type="text"
          text="Description"
          name="description"
          placeholder="Description"
          hanleOnChange={handleChange}
          value={service.description || ""}
        />
        <SubmitButton text="Update Service" />
      </form>
    </div>
  );
}

export default EditService;