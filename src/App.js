import { useEffect, useState } from "react";
import Card from "./components/Card";
import HeadCategory from "./components/HeadCategory";
import data from "./data.json";

function App() {
    const [ageTitle, setAgeTitle] = useState("senior");
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        if(ageTitle === "junior") {
           setCourses(data.filter(item => item.min_age <= 10)); 
        } else {
           setCourses(data.filter(item => item.max_age >= 11)); 
        }
    }, [ageTitle])
  return (
    <main className="flex flex-col gap-16 min-h-screen min-w-screen p-4 py-10">
      <section className="flex flex-wrap gap-14 items-center justify-center pt-10">
        <HeadCategory title={"Junior"} ageMin={6} ageMax={10} ageTitle={ageTitle} setAgeTitle={setAgeTitle}/>
        <HeadCategory title={"Senior"} ageMin={11} ageMax={15} ageTitle={ageTitle} setAgeTitle={setAgeTitle}/>
      </section>
      <section className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-14">
      {courses.map((item,index) => {
          return <Card key={index} {...item} />
      })}
      </section>
    </main>
  );
}

export default App;
