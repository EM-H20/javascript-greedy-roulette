// 이벤트 리스너 + 흐름제어
import Roulette from "./Roulette.js";
import { INITIAL_BALANCE } from "./constants.js";
import {
  colorSelect,
  betAmount,
  betButton,
  stopButton,
  restartButton,
  initRoulette,
  updateMoneyDisplay,
  updateRoundDisplay,
  disableButtons,
  enableButtons,
  showSpinning,
  showResult,
  showBankruptMessage,
  showEndGame,
} from "./dom.js";

betButton.addEventListener("click", () => {});

stopButton.addEventListener("click", () => {});

restartButton.addEventListener("click", () => {});

const roulette = new Roulette();

initRoulette(INITIAL_BALANCE);

// 베팅 결과

// 베팅 클릭
