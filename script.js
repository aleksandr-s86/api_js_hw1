// JSON-данные с расписанием занятий 
const scheduleData = [
    {
      "id": 1,
      "name": "Йога",
      "time": "10:00",
      "maxParticipants": 20,
      "currentParticipants": 15
    },
    {
      "id": 2,
      "name": "Пилатес",
      "time": "12:00",
      "maxParticipants": 15,
      "currentParticipants": 10
    },
  ];
  
  // Функция для отображения расписания на странице
  function renderSchedule() {
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = ''; // Очищаем текущее расписание
  
    scheduleData.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'mb-4');
  
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Время: ${item.time}</p>
            <p class="card-text">Макс. участников: ${item.maxParticipants}</p>
            <p class="card-text">Записано: <span id="participants-${item.id}">${item.currentParticipants}</span></p>
            <button id="btn-register-${item.id}" class="btn btn-primary mr-2">Записаться</button>
            <button id="btn-cancel-${item.id}" class="btn btn-secondary">Отменить запись</button>
          </div>
        </div>
      `;
  
      // Добавляем карточку занятия в список
      scheduleList.appendChild(card);
  
      // Обработчики событий для кнопок записи и отмены записи
      const btnRegister = document.getElementById(`btn-register-${item.id}`);
      const btnCancel = document.getElementById(`btn-cancel-${item.id}`);
  
      btnRegister.addEventListener('click', () => {
        if (item.currentParticipants < item.maxParticipants) {
          item.currentParticipants++;
          document.getElementById(`participants-${item.id}`).textContent = item.currentParticipants;
          btnRegister.disabled = true;
        }
      });
  
      btnCancel.addEventListener('click', () => {
        if (item.currentParticipants > 0) {
          item.currentParticipants--;
          document.getElementById(`participants-${item.id}`).textContent = item.currentParticipants;
          btnRegister.disabled = false;
        }
      });
  
      // Проверка и установка состояния кнопки "Записаться"
      if (item.currentParticipants >= item.maxParticipants) {
        btnRegister.disabled = true;
      }
    });
  }
  
  // Вызов функции для отображения расписания при загрузке страницы
  document.addEventListener('DOMContentLoaded', renderSchedule);