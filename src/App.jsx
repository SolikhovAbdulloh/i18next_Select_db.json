import React from "react";
import { useTranslation } from "react-i18next";
import "./locale";
import { Avatar, Select } from "antd";

const { Option } = Select;

function App() {
  const { t, i18n } = useTranslation();

  const change = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="app-container">
      <Select
        className="language-select px-2"
        onChange={change}
        defaultValue="en"
        style={{ width: 240, height:80 }}
        dropdownStyle={{
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Option value="en" className="option-item">
          <span className="language-name">English</span>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
            round
            size="30"
            className="avatar"
          />
        </Option>
        <Option value="ru" className="option-item">
          <span className="language-name">Русский</span>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png"
            round
            size="30"
            className="avatar"
          />
        </Option>
        <Option value="uz" className="option-item">
          <span className="language-name">O'zbek</span>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
            round
            size="30"
            className="avatar"
          />
        </Option>
      </Select>

      <div className="content-container">
        <h1 className="content-item">1-{t("search")}</h1>
        <h1 className="content-item">2-{t("ded")}</h1>
        <h1 className="content-item">3-{t("storm")}</h1>
        <h1 className="content-item">4-{t("bookcases")}</h1>
        <h1 className="content-item">5-{t("nflStats")}</h1>
      </div>
    </div>
  );
}

export default App;
