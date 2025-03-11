import Contacte from "@/components/ContactezNous";
import style from "./page.module.css";

export default function ContactezNous() {
  return (
    <div className={style.contacte}>
      <Contacte className={style.form}/>
    </div>
  );
}
