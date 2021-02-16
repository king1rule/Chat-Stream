import React from "react";
import { Chat, Channel, ChannelHeader, Window } from "stream-chat-react";
import {
  MessageList,
  MessageInput,
  MessageLivestream,
} from "stream-chat-react";
import { MessageInputSmall, Thread } from "stream-chat-react";
import { StreamChat } from "stream-chat";

import "stream-chat-react/dist/css/index.css";

const chatClient = StreamChat.getInstance("dz5f4d5kzrue");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic29mdC1tdWQtMCIsImV4cCI6MTYxMzQ4MDUwMX0.x64mQk9FmKjvOFWTxbL_87IBwt7-yJIRBPBbfwUMsww";

chatClient.connectUser(
  {
    id: "soft-mud-0",
    name: "soft",
    image: "https://getstream.io/random_png/?id=soft-mud-0&name=soft",
  },
  userToken
);

const channel = chatClient.channel("livestream", "spacex", {
  image: "https://goo.gl/Zefkbx",
  name: "SpaceX launch discussion",
});

const App = () => (
  <Chat client={chatClient} theme="livestream dark">
    <Channel channel={channel} Message={MessageLivestream}>
      <Window hideOnThread>
        <ChannelHeader live />
        <MessageList />
        <MessageInput Input={MessageInputSmall} focus />
      </Window>
      <Thread fullWidth />
    </Channel>
  </Chat>
);

export default App;
