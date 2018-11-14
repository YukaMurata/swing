export default class swing{
  constructor(){
    this.accelerationX = null;
    this.accelerationY = null;
    this.accelerationZ = null;
    this.isSwing = 0;
    this.addEvent();
  }

  addEvent(){
    window.addEventListener('devicemotion', (event) => {
      this.accelerationX = event.acceleration.x;
      this.accelerationY = event.acceleration.y;
      this.accelerationZ = event.acceleration.z;

      if(this.accelerationX > 100 || this.accelerationY>100 || this.accelerationZ>100){
        this.isSwing++;
      }
      if(this.isSwing >= 13){
        this.showAlert();
      }
    });
  }

  showAlert(){
    alert(`${this.accelerationX},${this.accelerationY},${this.accelerationZ},${this.isSwing}`);
  }
}
