import { useLanguage } from "../i18n/language";

export default function RequestAccess() {
  const { t } = useLanguage();

  return <h1>{t("page.requestAccess")}</h1>;
}
