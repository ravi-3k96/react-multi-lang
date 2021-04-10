import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Select from "react-select";

const LanguageSelect = () => {
const { i18n } = useTranslation()
//const i18nLanguage = i18n.language
const currentLanguageObj = JSON.parse(localStorage.getItem('LanguageObj')) ? JSON.parse(localStorage.getItem('LanguageObj')) : localStorage.setItem('LanguageObj',JSON.stringify({"name":"English","code":"en"}))
const [currentI18nLanguage, setCurrentI18nLanguage] = useState(currentLanguageObj)

console.log(localStorage.getItem('LanguageObj'));
const languageOptions = [
  {
    "name": "Deutsch",
    "code": "de"
  },
  {
    "name": "Español",
    "code": "es"
  },
  {
    "name": "English",
    "code": "en"
  },
  {
    "name": "Français",
    "code": "fr"
  }];

const changeLanguage = (obj) => {
  i18n.changeLanguage(obj.code)
  setCurrentI18nLanguage(obj);
  localStorage.setItem('LanguageObj',JSON.stringify(obj));
};
// const changeLanguage = (language) => {
//   i18n.changeLanguage(language)
//   setCurrentI18nLanguage(language)
// }

return (
    // <select 
    //   onChange={(event) => changeLanguage(event.target.value)}
    //   value={currentI18nLanguage}
    // >
    // {Object.entries(languageOptions).map(([id, name]) => (
    //     <option key={id} value={id}>{name}</option>
    //  ))}
    // </select>

    <Select
      placeholder="Select Language"
      value={currentI18nLanguage}
      options={languageOptions}
      onChange={changeLanguage}
      getOptionLabel={x => x.name}
      getOptionValue={x => x.code}
    />
)
}
export default LanguageSelect;
