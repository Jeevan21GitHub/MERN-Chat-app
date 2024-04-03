import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
const Home = () => {
  return (
    <section>
      <div className="flex">
        <div className="w-3/12">
          <Sidebar />
        </div>
        <div className="w-9/12">
          <MessageContainer/>
        </div>
      </div>
    </section>
  );
};

export default Home;
