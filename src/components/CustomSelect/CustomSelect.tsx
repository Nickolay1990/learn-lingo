import * as Select from "@radix-ui/react-select";
import css from "./CustomSelect.module.css";

interface CustomSelectProps {
  options: string[];
  placeholder: string;
  value?: string;
  onChange?: (val: string) => void;
}

export default function CustomSelect({
  options,
  placeholder,
  value,
  onChange,
}: CustomSelectProps) {
  return (
    <div>
      <p className={css.label}>{placeholder}</p>
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          className={`${css.trigger} ${
            placeholder === "Languages" && css.languages
          } ${placeholder === "Level of knowledge" && css.levels} ${
            placeholder === "Price" && css.price
          }`}
        >
          <Select.Value placeholder={options[0]} />
          <Select.Icon>
            <svg className={css.icon}>
              <use href="/symbol-defs.svg#icon-chevron-down" />
            </svg>
          </Select.Icon>
        </Select.Trigger>

        <Select.Content
          className={`${css.content} ${
            placeholder === "Languages" && css.languages
          } ${placeholder === "Level of knowledge" && css.levels} ${
            placeholder === "Price" && css.price
          }`}
          position="popper"
        >
          <Select.Viewport>
            {options.map((item) => (
              <Select.Item key={item} value={item} className={css.item}>
                <Select.ItemText>{item}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
