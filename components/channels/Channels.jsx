import React, { useState } from "react";
import Channel from "./Channel";
import { useSelector } from "react-redux";

const Channels = () => {
  const { channels, currentChannelId } = useSelector(
    (state) => state.channelsInfo.channels
  );
  const [activeID, setActiveID] = useState(currentChannelId ?? 1);

  return (
    <>
      {channels && (
        <ul className="nav flex-column nav-pills nav-fill px-2 mt-3">
          {channels.map(({ id, name }) => {
            return (
              <Channel
                name={name}
                key={id}
                id={id}
                activeID={activeID}
                setActiveID={setActiveID}
              />
            );
          })}
        </ul>
      )}

      {/*<pre>{JSON.stringify(channels, null, 2)}</pre>*/}
      {/*<pre>{JSON.stringify(currentChannelId, null, 2)}</pre>*/}
    </>
  );
};

export default Channels;
