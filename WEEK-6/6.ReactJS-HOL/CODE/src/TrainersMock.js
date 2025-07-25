// src/TrainersMock.js
import Trainer from './Trainer';

const trainers = [
  new Trainer(1, 'Alice', 'alice@example.com', '1234567890', 'React', ['JSX', 'Hooks']),
  new Trainer(2, 'Bob', 'bob@example.com', '9876543210', 'Angular', ['Directives', 'RxJS']),
  new Trainer(3, 'Carol', 'carol@example.com', '5555555555', 'Vue', ['Vuex', 'Composition API']),
];

export default trainers;
