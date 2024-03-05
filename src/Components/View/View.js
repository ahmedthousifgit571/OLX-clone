import React, { useContext, useEffect, useState } from "react";

import "./View.css";
import { postContext } from "../../store/postContext";
import { FirebaseContext } from "../../store/context";
function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(postContext);
  const { firebase } = useContext(FirebaseContext);
  console.log(postDetails, "postDetails");
  useEffect(() => {
    const { userId } = postDetails;
    firebase
      .firestore()
      .collection("users")
      .where("id", "==", userId)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
  }, []);
  console.log("zzzpostDetails");

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>

          <span>{postDetails.createAt}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
