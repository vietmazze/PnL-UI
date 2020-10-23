import React from "react";
import firebase from "../../services/firebase";

export const PlannerRefresh = ({ onClick }) => {
  const refreshData = () => {
    console.log("test");
    const unsub = firebase
      .firestore()
      .collection("note")
      .get()
      .then((query) => {
        query.forEach((doc) => {
          doc.ref.update({
            extra: "hello ",
          });
        });
      });
  };
  return (
    <div>
      <button className="planner-refresh-btn" onClick={refreshData}>
        Refresh
      </button>
    </div>
  );
};
