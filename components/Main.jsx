import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "../slices/messageSlices";
import { getMessageFetcher } from "../api/getMessage.js";
import { getChannels } from "../slices/channelsSlices.js";

const Main = () => {
  const { isAuthed, accessToken } = useAuth();
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();
  // Вытаскиваем данные из хранилища. state – все состояние
  const channels = useSelector((state) => state.channelsInfo.channels);
  const messages = useSelector((state) => state.messagesInfo.messages);

  // console.count("render Main");

  useEffect(() => {
    if (accessToken) {
      const fetch = async () => {
        const response = await getMessageFetcher(accessToken);
        if (response) {
          const dataForChannels = {
            channels: response?.channels,
            currentChannelId: response?.currentChannelId,
          };
          dispatch(getChannels(dataForChannels));
          dispatch(getMessage(response?.messages));
        }
      };
      fetch();
    }
  }, [accessToken]);

  return (
    <div className="d-flex flex-column h-100">
      <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a href="#">Logo</a>
          <div className="">
            <button type="button" className="btn btn-secondary">
              Выйти
            </button>
          </div>
        </div>
      </nav>
      <div className="container my-4 overflow-hidden rounded shadow flex-grow-1">
        <div className="row bg-white flex-md-row h-100">
          <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
            {isAuthed && "Вошёл"}
            <pre>{JSON.stringify(channels, null, 2)}</pre>
          </div>
          <div className="col p-0">
            <pre>{JSON.stringify(messages, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
