export default class swing{
  constructor(){
    this.accelerationX = null;
    this.accelerationY = null;
    this.accelerationZ = null;
    this.isSwing = 0;
    this.isAlert = false;
    this.addEvent();
  }

  /**
   * イベントまとめたもの
   */
  addEvent(){
    window.addEventListener('devicemotion', (event) => {
      this.accelerationX = event.acceleration.x;
      this.accelerationY = event.acceleration.y;
      this.accelerationZ = event.acceleration.z;

      if(this.accelerationX > 10 || this.accelerationY>10 || this.accelerationZ>10){
        this.isSwing++;
      }
      if(this.isSwing >= 20 && !this.isAlert){
        this.showAlert();
      }
    });
  }

  /**
   * アラートを表示する
   */
  showAlert(){
    alert(`${this.accelerationX},${this.accelerationY},${this.accelerationZ},${this.isSwing}`);
    this.isAlert = true;
  }
}
