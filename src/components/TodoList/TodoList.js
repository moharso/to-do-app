import { useState, useEffect} from "react";
import { useContext } from "react";
import "./TodoList.css";
import InputForm from "../InputForm/InputForm.js";
import { ThemeContext } from "../../context/ThemeContext";

const TodoList = ({ search, selectedProject }) => {
  const [todos, setTodos] = useState([]);
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);
  const [remainingItems, setRemainingItems] = useState(0);
  
  const { theme } = useContext(ThemeContext);

  const TodoListStyles = {
    light: {
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2000' height='1000' preserveAspectRatio='none' viewBox='0 0 2000 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1142%26quot%3b)' fill='none'%3e%3crect width='2000' height='1000' x='0' y='0' fill='rgba(248%2c 248%2c 248%2c 1)'%3e%3c/rect%3e%3cpath d='M1317.398%2c732.262C1407.698%2c728.253%2c1479.396%2c661.29%2c1519.769%2c580.418C1555.844%2c508.156%2c1544.344%2c425.78%2c1505.846%2c354.779C1465.084%2c279.602%2c1402.915%2c206.995%2c1317.398%2c207.188C1232.105%2c207.38%2c1174.362%2c282.524%2c1130.415%2c355.624C1084.552%2c431.91%2c1041.731%2c520.157%2c1081.312%2c599.884C1124.312%2c686.498%2c1220.793%2c736.551%2c1317.398%2c732.262' fill='rgba(181%2c 170%2c 157%2c 0.24)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M601.27 618.56 a272.95 272.95 0 1 0 545.9 0 a272.95 272.95 0 1 0 -545.9 0z' fill='rgba(181%2c 170%2c 157%2c 0.24)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1566.84 908.45 a210.29 210.29 0 1 0 420.58 0 a210.29 210.29 0 1 0 -420.58 0z' fill='rgba(181%2c 170%2c 157%2c 0.24)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1730.68 334.8 a175.3 175.3 0 1 0 350.6 0 a175.3 175.3 0 1 0 -350.6 0z' fill='rgba(181%2c 170%2c 157%2c 0.24)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M365.83%2c226.672C417.239%2c224.999%2c460.919%2c196.09%2c489.863%2c153.571C523.977%2c103.458%2c559.269%2c40.271%2c528.128%2c-11.741C497.369%2c-63.117%2c425.673%2c-55.71%2c365.83%2c-53.593C311.233%2c-51.661%2c251.843%2c-46.858%2c222.275%2c-0.92C190.735%2c48.082%2c195.895%2c112.835%2c226.984%2c162.124C256.168%2c208.392%2c311.156%2c228.451%2c365.83%2c226.672' fill='rgba(181%2c 170%2c 157%2c 0.24)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1540.646%2c398.263C1577.888%2c398.329%2c1609.16%2c371.492%2c1625.841%2c338.195C1640.884%2c308.167%2c1633.478%2c274.171%2c1617.656%2c244.546C1600.6%2c212.611%2c1576.746%2c181.425%2c1540.646%2c178.679C1500.313%2c175.611%2c1459.259%2c195.339%2c1440.266%2c231.053C1422.151%2c265.117%2c1436.115%2c304.815%2c1455.973%2c337.893C1475.095%2c369.746%2c1503.494%2c398.197%2c1540.646%2c398.263' fill='rgba(181%2c 170%2c 157%2c 0.24)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1945.2403847092123 977.4704231930702L2032.8901636731505 842.5015994804095 1786.6120386221903 778.5113428908327z' fill='rgba(181%2c 170%2c 157%2c 0.24)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M229.732%2c544.844C257.508%2c544.24%2c282.284%2c528.179%2c295.876%2c503.948C309.171%2c480.245%2c307.752%2c452.059%2c295.339%2c427.882C281.601%2c401.124%2c259.762%2c376.838%2c229.732%2c375.119C197.078%2c373.25%2c165.25%2c390.78%2c149.686%2c419.546C134.754%2c447.143%2c141.515%2c480.496%2c158.408%2c506.939C173.943%2c531.256%2c200.883%2c545.472%2c229.732%2c544.844' fill='rgba(181%2c 170%2c 157%2c 0.24)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1142'%3e%3crect width='2000' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`,
      color: '#333333',
      transition: '0.3s',
    },
    dark: {
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='2000' height='1000' preserveAspectRatio='none' viewBox='0 0 2000 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1006%26quot%3b)' fill='none'%3e%3crect width='2000' height='1000' x='0' y='0' fill='rgba(14%2c 14%2c 14%2c 1)'%3e%3c/rect%3e%3cpath d='M1014.31 974.22 a244 244 0 1 0 488 0 a244 244 0 1 0 -488 0z' fill='rgba(255%2c 255%2c 255%2c 0.39)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M-68.21 175.25 a193.53 193.53 0 1 0 387.06 0 a193.53 193.53 0 1 0 -387.06 0z' fill='rgba(255%2c 255%2c 255%2c 0.39)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M706.71 498.57 a233.77 233.77 0 1 0 467.54 0 a233.77 233.77 0 1 0 -467.54 0z' fill='rgba(255%2c 255%2c 255%2c 0.39)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1794.8000130530304 628.6047511228553L1626.5951761152628 454.4235435475972 1620.6188054777724 796.8095880606229z' fill='rgba(255%2c 255%2c 255%2c 0.39)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1782.629%2c775.446C1821.362%2c776.773%2c1850.95%2c745.578%2c1870.851%2c712.322C1891.452%2c677.895%2c1907.871%2c635.389%2c1886.912%2c601.179C1866.506%2c567.871%2c1821.639%2c566.301%2c1782.629%2c568.322C1748.004%2c570.116%2c1712.609%2c580.927%2c1695.52%2c611.094C1678.628%2c640.913%2c1688.239%2c676.336%2c1704.288%2c706.617C1721.735%2c739.535%2c1745.395%2c774.171%2c1782.629%2c775.446' fill='rgba(255%2c 255%2c 255%2c 0.39)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-4.371140224566367 911.7297943202998L263.30384482809393 921.0772107720309 4.976276227164683 644.0548092676395z' fill='rgba(255%2c 255%2c 255%2c 0.39)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1350.0713229061234 530.2832968369255L1233.3972741250884 679.6192692682985 1382.7332465564614 796.2933180493335 1499.4072953374964 646.9573456179605z' fill='rgba(255%2c 255%2c 255%2c 0.39)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M154.2670929542923 591.8260214585125L350.4643821558626 826.0979042311048 446.1921603682147 576.7185160226722z' fill='rgba(255%2c 255%2c 255%2c 0.39)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M870.719%2c791.951C957.965%2c791.763%2c1044.999%2c756.401%2c1088.004%2c680.49C1130.49%2c605.494%2c1117.78%2c511.739%2c1070.168%2c439.889C1027.202%2c375.051%2c948.451%2c355.385%2c870.719%2c352.593C786.061%2c349.552%2c691.751%2c354.094%2c644.807%2c424.61C593.943%2c501.015%2c603.725%2c603.244%2c651.808%2c681.429C697.704%2c756.057%2c783.107%2c792.14%2c870.719%2c791.951' fill='rgba(255%2c 255%2c 255%2c 0.39)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M177.886%2c961.049C235.419%2c961.233%2c293.846%2c935.445%2c319.179%2c883.79C342.455%2c836.33%2c312.973%2c785.259%2c286.551%2c739.476C260.117%2c693.671%2c230.753%2c640.32%2c177.886%2c638.958C123.632%2c637.561%2c86.05%2c686.525%2c59.073%2c733.617C32.304%2c780.346%2c13.209%2c835.161%2c38.145%2c882.893C64.631%2c933.593%2c120.684%2c960.866%2c177.886%2c961.049' fill='rgba(255%2c 255%2c 255%2c 0.39)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1006'%3e%3crect width='2000' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`,
      color: '#ffffff',
      transition: '0.3s',
    },
  };
  

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (storedTodos) {
      setTodos(storedTodos);
    }
    setIsComponentLoaded(true);
  }, []);

  useEffect(() => {
    isComponentLoaded && localStorage.setItem("todos", JSON.stringify(todos));
    const remainingTodos = todos.filter((todo) => !todo.isChecked).length;

    setRemainingItems(remainingTodos);
  }, [todos, isComponentLoaded]);

  if (!isComponentLoaded) {
    return <h2>Loading...</h2>; //add spinner
  }

  //todos array filter
  const filteredTodos = todos.filter((todo) => {
    const matchesSearch =
      !search || todo.input.toLowerCase().includes(search.toLowerCase());
    const matchesProject =
      selectedProject === "All" || todo.type === selectedProject;
    return matchesSearch && matchesProject;
  });

  return (
    <div className="TodoListWrapper" style={{ ...TodoListStyles[theme] }}>
    <div className="TodoList">
      <h4>REMAINING TASKS: {remainingItems}</h4>
      <h2>What do you have planned?</h2>

      {/* passing filtered Todos list */}
      <InputForm todos={filteredTodos} setTodos={setTodos} />

      <button className="DeleteAll"
        onClick={() => {
          const remainingTodos = todos.filter((todo) => !todo.isChecked);
          setTodos(remainingTodos);
        }}
      >
        DELETE COMPLETED TASKS
      </button>
    </div>
    </div>
  );
};

export default TodoList;
