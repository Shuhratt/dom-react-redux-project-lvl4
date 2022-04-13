import React, { useEffect } from "react";
import { useAuth } from "../../context/auth";
import { useDispatch } from "react-redux";
import { getMessage } from "../../slices/messageSlices";
import { getData } from "../../api/getData.js";
import { getChannels } from "../../slices/channelsSlices.js";
import Form from "../chat/form/Form";
import AddChannels from "../channels/AddChannels";
import Channels from "../channels/Channels";
import Messages from "../chat/messages/Messages";
import Header from "../layouts/header/Header";
import MainContainer from "../layouts/content/MainContainer";
import Sidebar from "../layouts/content/Sidebar";
import Content from "../layouts/content/Content";

const Main = () => {
  const { isAuthed, accessToken } = useAuth();
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  // console.count("render Main");

  useEffect(() => {
    if (accessToken) {
      const fetch = async () => {
        const response = await getData(accessToken);
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
    <MainContainer header={<Header />}>
      <Sidebar>
        <AddChannels />
        <Channels />
        {/*{isAuthed && "Вошёл"}*/}
      </Sidebar>
      <Content>
        <Messages />
        <Form />
      </Content>
    </MainContainer>
  );
};

export default Main;
