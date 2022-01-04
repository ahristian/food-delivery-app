import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @tracked isShow = this.args.isShow ?? null;

  @action toggle() {
    if (this.isShow === true) {
      this.isShow = null;
    } else {
      this.isShow = true;
    }
  }

  @action someAction(){
    this.isShow = null;
  }
}
