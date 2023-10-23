const students = [
    {student: 'Fred Feuerstein', done: true},
    {student: 'Wilma Pebbles', done: false},
    {student: 'Bernie Licht', done: false},
    {student: 'Ella Langhals', done: true},
    {student: 'Bruno Dust', done: false},
    {student: 'Gerhard Gustavson', done: true}
  ];

  module.exports = {
    getAll: function() {
        return students;
    }
  };