import style from "./Button.module.scss"

interface IButton {
  disabled: boolean
}

export default function Button({ disabled }: IButton) {
  return (
    <div>
      <button disabled={disabled} className={style.button} type="button">Показать на карте</button>
    </div>
  )
}
