import { useLanguage } from "../i18n/language";

export default function Login() {
  const { t } = useLanguage();

  return <h1>{t("page.login")}</h1>;
}
