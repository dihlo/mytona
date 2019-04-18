import React, { Component } from 'react';
import './css/Add.css';

class Add extends Component {
  render() {
    return (
        <div className="add-container">
            <div>Добавить проект</div>
            <form>
              <label>
                Имя проекта:
                <input type="text" name="name" />
              </label>
              <label>
                Ссылка:
                <input type="text" name="link" />
              </label>
              <label>
                Скриншот:
                <input type="text" name="photo" />
              </label>
              <label>
                Описание:
                <input type="text" name="disc" />
              </label>                            
              <input type="submit" value="Submit" />
            </form>
        </div>
    );
  }
}

export default Add;
