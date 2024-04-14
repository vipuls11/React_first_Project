const name = "vipul vishwakarma";

const name1 = "Arjoo Vishwakarma";

function Listtype() {
  const list = [
    {
      name: "vipul vishwakarma",
      title: "Learing Software website",
      Age: "24",
      courses: "HTML, CSS, JAVASCRIPT, LARAVEL, PHP, MSQL, REACT, DOCKER",
    },
    {
      name: "vipul vishwakarma",
      title: "Learing Software website",
      Age: "24",
      courses: "HTML, CSS, JAVASCRIPT, LARAVEL, PHP, MSQL, REACT, DOCKER",
    },
    {
      name: "vipul vishwakarma",
      title: "Learing Software website",
      Age: "24",
      courses: "HTML, CSS, JAVASCRIPT, LARAVEL, PHP, MSQL, REACT, DOCKER",
    },
    {
      name: "vipul vishwakarma",
      title: "Learing Software website",
      Age: "24",
      courses: "HTML, CSS, JAVASCRIPT, LARAVEL, PHP, MSQL, REACT, DOCKER",
    },
    {
      name: "vipul vishwakarma",
      title: "Learing Software website",
      Age: "24",
      courses: "HTML, CSS, JAVASCRIPT, LARAVEL, PHP, MSQL, REACT, DOCKER",
    },
  ];
  const lists = list.map(() => (
    <>
      <div>
        <h1>{list.name}</h1>
        <p>{list.title}</p>
        <span className="">{list.Age}</span>
        <p>{list.courses}</p>
      </div>
    </>
  ));
}
const helloy = () => {
  return <>hello sbdvhg</>;
};

export default name;
export { name1, helloy, Listtype };
