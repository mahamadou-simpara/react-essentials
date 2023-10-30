import reactImg from "../assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Core", "Crucial"];

const genRandomInt = (length) => {

  return Math.floor(Math.random() * length);
};


const description = reactDescription[genRandomInt(3)];


export default function Header() {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }