import { useTranslations } from "next-intl";
import { LocalSwitcherSelect } from "./locale-switcher-select";
import { routing } from "@/i18n/routing";

export const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  return (
    <LocalSwitcherSelect defaultValue={routing.defaultLocale}>
      {routing.locales.map((currentLocale) => (
        <option
          className="text-current"
          key={currentLocale}
          value={currentLocale}
        >
          {t("locale", { locale: currentLocale })}
        </option>
      ))}
    </LocalSwitcherSelect>
  );
};
