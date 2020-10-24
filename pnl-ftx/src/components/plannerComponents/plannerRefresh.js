import React, { useEffect } from "react";
import firebase from "../../services/firebase";

export const PlannerRefresh = ({ note, setNote, setPlanner }) => {
  const refreshData = (e) => {
    e.preventDefault();
    console.log("test");
    const unsub = firebase
      .firestore()
      .collection("planner")
      .get()
      .then((query) => {
        query.forEach((doc) => {
          doc.ref.update({
            log: 0,
            progress: " ",
            title: doc.data().title,
          });
        });
      });
    firebase
      .firestore()
      .collection("note")
      .get()
      .then((query) => {
        query.forEach((doc) => {
          doc.ref.update({
            extra: " ",
          });
        });
      });
    console.log("Data refresh and cleared in firebase");
    return () => unsub();
  };

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("planner")
      .onSnapshot((snapshot) => {
        const resetPlanner = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlanner(resetPlanner);
      });
    return () => unsubscribe();
  }, [refreshData]);

  return (
    <div>
      <button
        className="planner-refresh-btn"
        onClick={(e) => {
          refreshData(e);
        }}>
        Refresh
      </button>
    </div>
  );
};
