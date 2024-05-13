import PropTypes from "prop-types";

const userData = [
  {
    name: "Asardeen Mohamed",
    city: "Batticaloa",
    description: "Front End Developer",
    skills: ["HTML", "CSS", "JavaScript", "Java"],
    status: true,
    profile: "images/1.png",
  },
  {
    name: "Asardeen Mohamed",
    city: "Batticaloa",
    description: "Front End Developer",
    skills: ["HTML", "CSS", "JavaScript", "Java"],
    status: true,
    profile: "images/1.png",
  },
  {
    name: "Asardeen Mohamed",
    city: "Batticaloa",
    description: "Front End Developer",
    skills: ["HTML", "CSS", "JavaScript", "Java"],
    status: true,
    profile: "images/1.png",
  },
  {
    name: "Asardeen Mohamed",
    city: "Batticaloa",
    description: "Front End Developer",
    skills: ["HTML", "CSS", "JavaScript", "Java"],
    status: true,
    profile: "images/1.png",
  },
  {
    name: "Asardeen Mohamed",
    city: "Batticaloa",
    description: "Front End Developer",
    skills: ["HTML", "CSS", "JavaScript", "Java"],
    status: false,
    profile: "images/1.png",
  },

  {
    name: "Asardeen Mohamed",
    city: "Batticaloa",
    description: "Front End Developer",
    skills: ["HTML", "CSS", "JavaScript", "Java"],
    status: false,
    profile: "images/1.png",
  },

  {
    name: "Asardeen Mohamed",
    city: "Batticaloa",
    description: "Front End Developer",
    skills: ["HTML", "CSS", "JavaScript", "Java"],
    status: true,
    profile: "images/1.png",
  },
];

function User(props) {
  const status = props.status;
  return (
    <div className="card-container">
      <div>
        <span className={status ? "pro online" : "pro offline"}>
          {props.status ? "ONLINE" : "OFFLINE"}
        </span>
        <img src={props.profile} className="img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
      </div>

      <div className="button">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>

      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.bool.isRequired,
  profile: PropTypes.string.isRequired,
};

const UserCards = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
          status={user.status}
          profile={user.profile}
        />
      ))}
    </>
  );
};

export default UserCards;
