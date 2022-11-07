export const getData = () => {
  return new Promise(resolve => resolve([
    {
      consultationId: 'fca2b5fc-fc3c-43fe-b900-8a3b8af06bc9',
      client: {
        firstName: 'Иван',
        lastName: 'Иванов',
        middleName: 'Иванович'
      },
      status: 'New',
      queue: {
        code: 1,
        title: 'Запись в клинику'
      }
    },
    {
      consultationId: 'fca2b5fc-fc3c-43fe-b1220-8a3b22206bc9',
      client: {
        firstName: 'Александра',
        lastName: 'Константинопольская',
        middleName: 'Константиновна'
      },
      status: 'InProgress',
      queue: {
        code: 2,
        title: 'Онлайн консультация'
      }
    },
    {
      consultationId: 'fca2b5fc-fc3c-43fe-b900-8a3b8af06sdfc9',
      client: {
        firstName: 'Василий',
        lastName: 'Чапаев',
        middleName: 'Иванович'
      },
      status: 'InContact',
      queue: {
        code: 3,
        title: 'Чат поддержки'
      }
    },
    {
      consultationId: 'fca2b5fc-fc3c-43fe-b900-8a3b8af0336bc9',
      client: {
        firstName: 'Barack',
        lastName: 'Obama',
        middleName: 'Hussein'
      },
      status: 'New',
      queue: {
        code: 1,
        title: 'Запись в клинику'
      }
    },
    {
      consultationId: 'fca2b5fc-fc3c-43fe-b900-dssddfsesfzsdsd',
      client: {
        firstName: 'Валерий',
        lastName: 'Юрьев',
        middleName: 'Игоревич'
      },
      status: 'Canceled',
      queue: {
        code: 2,
        title: 'Онлайн консультация'
      }
    }
  ]))
}

export const getLists = () => {
  return new Promise(resolve => resolve({
    statuses: {
      New: {
        label: 'Новая',
        code: 'New'
      },
      InProgress: {
        label: 'В процессе',
        code: 'InProgress'
      },
      InContact: {
        label: 'Контакт с клиентом',
        code: 'InContact'
      },
      Canceled: {
        label: 'Завершена',
        code: 'Canceled'
      }
    },

    queues: {
      request: {
        label: 'Запись в клинику',
        code: 1
      },
      consultation: {
        label: 'Онлайн консультация',
        code: 2
      },
      help: {
        label: 'Чат поддержки',
        code: 3
      }
    }
  }))
}
