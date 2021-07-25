import React from "react";
import dayjs from "dayjs";

export default function CreateEvent({ addOrEditEvent }) {
  const now = dayjs();

  return (
    <div className="col-md-12">
      <button
        type="button"
        className="btn btn-success"
        onClick={(e) =>
          addOrEditEvent({
            slot:
              now.get("minutes") > 30
                ? now.add(1, "hour").startOf("hour")
                : now.set("minute", 30),
          })
        }
      >
        + Create Event
      </button>
    </div>
  );
}
