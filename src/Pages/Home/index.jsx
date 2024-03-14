import { useEffect, useState } from "react";
import "./style";
import { StyledHome } from "./style";
import UserBox from "../../Component/userBox";
import SearchBox from "../../Component/serachBox";
import HistoryBox from "../../Component/historyBox";
import Setting from "../../Component/SettingBox";
import MessageBox from "../../Component/MessageBox";
import ChattBox from "../../Component/ChatBox";

const Home = () => {
  const [messages, setMessages] = useState([
    { text: "سلام، چطور می‌توانم به شما کمک کنم؟", isBot: true },
  ]);
  const [inputText, setInputText] = useState("");

  function generateRandomText(wordsCount) {
    const wordBank = [
      "لورم",
      "ایپسوم",
      "دلور",
      "سیت",
      "امت",
      "کنسکتتور",
      "ادیپیسیشینگ",
      "الیت",
      "سد",
      "دو",
      "ایوسماد",
      "تمپور",
      "اینسیدیدونت",
      "ات",
      "لابوره",
      "ات",
      "دلوره",
      "مانگا",
      "آلیکوا",
      "ات",
      "انیم",
      "اد",
      "مینیم",
      "ونیام",
      "کویس",
      "نوسترود",
      "اکسرسیتاتیون",
      "اللامکو",
      "لابوریس",
      "نیسی",
      "ات",
      "آلیکیویپ",
      "ات",
      "ایکس",
      "ایا",
      "کوممودو",
      "کنسکوات",
      "دوئیس",
      "اوته",
      "ایرور",
      "دلور",
      "این",
      "رئپرهندیت",
      "این",
      "وولوپتاته",
      "وئلیت",
      "سه",
      "کیلوم",
      "دولور",
      "آیو",
      "فوگیات",
      "نولا",
      "پاریاتور",
      "اکسپتور",
      "سینت",
      "اکاکات",
      "کوپیداتات",
      "نون",
      "پروئیدنت",
      "سونت",
      "این",
      "کولپا",
      "کوی",
      "آفیسیا",
      "دسرانت",
      "مولیت",
      "آنیم",
      "اید",
      "آست",
      "لابوروم",
    ];

    let text = "";
    for (let i = 0; i < wordsCount; i++) {
      const randomIndex = Math.floor(Math.random() * wordBank.length);
      text += wordBank[randomIndex] + " ";
    }
    return text.trim();
  }

  const handleSendMessage = () => {
    if (inputText.trim() === "") return;
    const newMessage = { text: inputText, isBot: false };
    setMessages([...messages, newMessage]);
    setInputText("");
    // اینجا باید پاسخ بات را دریافت و به messages اضافه کنید
  };

  useEffect(() => {
    const lastMessage = messages.length - 1;
    if (!messages[lastMessage].isBot) {
      const RandomText = generateRandomText(200);
      const newBotMessage = { text: RandomText, isBot: true };
      setMessages([...messages, newBotMessage]);
    }
  }, [messages]);

  // useEffect(() => {
  //     const newBotMessage = { text: generateRandomText(200), isBot: true };
  //     setMessages([...messages, newBotMessage]);
  // } , [messages]);

  return (
    <StyledHome>
      <div className="sidebar">
        <UserBox />
        <SearchBox />
        <HistoryBox />
        <Setting />
      </div>
      <main className="main">
        <MessageBox
          handleSendMessage={handleSendMessage}
          inputText={inputText}
          setInputText={setInputText}
        />
        <ChattBox messages={messages} />
      </main>
    </StyledHome>
  );
};

export default Home;
