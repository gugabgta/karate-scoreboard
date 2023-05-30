import './Settings.css'
import cogs from './setting-line-icon.svg'

const Settings = (props) => {
    return (
        <div className="settings">
            <button class="settings-icon">
                <img alt="settings" src={cogs} />
            </button>
            <div class="settings-popover">
                <ul>
                    {props.items.map(list_item => {
                        return <li><button onClick={list_item.on_click}>{list_item.title}</button></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Settings
