import dateFormat from 'dateformat';
import React from 'react';

const LoadComments = (props) => {
    return (
        <div style={{float: 'left'}}>
            {props.comments.map(comment => {
                return (
                  <div key={comment.id}>
                    <h5>{comment.author}</h5>
                    <p>{comment.comment}</p>
                    <p>
                      {" "}
                      {dateFormat(
                        comment.date,
                        "dddd, mmmm dS, yyyy, h:MM:ss TT"
                      )}
                      ;
                    </p>
                    <hr style={{ background: "#7eff14" }} />
                  </div>
                );
            })}
        </div>
    )
}

export default LoadComments
