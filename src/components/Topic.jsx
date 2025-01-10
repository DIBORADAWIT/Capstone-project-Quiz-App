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

  return (
    <div>
      <div>Topic</div>
      {selectedTopic && <div> selected topic id is {selectedTopic}</div>}
      <div className="flex flex-col justify-start items-start gap-4">
        {topics.map((topic) => {
          return (
            <a
              className="bg-white text-black px-5 py-2"
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
