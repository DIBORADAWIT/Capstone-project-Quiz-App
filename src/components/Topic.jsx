import axios from "axios";
import React, { useEffect, useState } from "react";

function Topic() {
  const [topics, useTopic] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState();

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = () => {
    axios.get("https://opentdb.com/api_category.php").then((resp) => {
      //   console.log(resp.data.trivia_categories);
      useTopic(resp.data.trivia_categories);
    });
  };

  const getTopicID = (id) => {
    console.log("id", id);
    setSelectedTopic(id);
  };

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];

  return (
    <div className="flex flex-col gap-20">
      <div className="text-7xl font-extrabold underline">Topic</div>
      {selectedTopic && <div> selected topic id is {selectedTopic}</div>}
      <div className="flex flex-wrap gap-4">
        {topics.map((topic, index) => {
          return (
            <a
              className={`${
                colors[index % colors.length]
              } text-black px-5 py-2`}
              href={`/difficulty/${topic.id}`}
              //   onClick={() => getTopicID(topic.id)}
            >
              {topic.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Topic;
