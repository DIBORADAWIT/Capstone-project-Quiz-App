import axios from "axios";
import React, { useEffect, useState } from "react";

function Topic() {
  const [topics, useTopic] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = () => {
    axios.get("https://opentdb.com/api_category.php").then((resp) => {
      useTopic(resp.data.trivia_categories);
    });
  };

  const getTopicID = (id) => {
    setSelectedTopic(id);
  };

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

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
      <div>
        <input
          type="text"
          placeholder="Search ..."
          name=""
          className="w-[50vw] bg-white text-black px-10 py-3 rounded-full"
          id=""
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {selectedTopic && <div> selected topic id is {selectedTopic}</div>}
      <div className="flex flex-wrap gap-4">
        {filteredTopics.length ? (
          filteredTopics.map((topic, index) => {
            return (
              <a
                className={`${
                  colors[index % colors.length]
                } text-black px-5 py-2`}
                href={`/difficulty/${topic.id}/${topic.name}`}
                //   onClick={() => getTopicID(topic.id)}
              >
                {topic.name}
              </a>
            );
          })
        ) : (
          <div className="flex justify-center w-full">
            <div className="text-xl font-extrabold animate-pulse">
              No results found, try with another keyword
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Topic;
