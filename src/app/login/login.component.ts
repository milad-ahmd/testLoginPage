import { Component, OnInit } from '@angular/core';
import { Notify } from '../base/notify/notify';
import { NotifyConfig } from '../base/notify/notify-config';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    this.user.verifyCode = '03AOLTBLTSp5YrVmfzq3OCUZJFIm62KrjWFNq_FVlLoaU3xgu_ZvAQvOrgWDWJmTzBKdAAUqN05UoX1juKvA99iVoch3wi79tMpygqRMu7YNRBhveJ7uzC2wvSiePiNn_ueeRxdOdrA01OeuuVV3PIdwvAM-riX1R6Qx1ebRPmLRmra9jNEDuZBtT32G_9z9RiYk9isUvqWg8Qp-0btpqwDrMw6mU6UOQFcSzct60ij67gY8XRItuBecaNMitwgws_SfMKKXvsp9FTCfdcGNcEmQjJ6S2jitykqbEbyTRhoHBWVKLkWt5ZgOQ5E-Fs8Rl-pT8etwB72CeBitsHT6Zo7Wm83Svu9YAaaEEv9jGgFQSH91XmmAu_dsQrVCR97Oam-OGf4rHvz435';
    this.userService.login(this.user).subscribe((res: any) => {
      console.log(res);
      if(res.stateCode===200){
        const notifyConfig = new NotifyConfig(
          Notify.Type.SUCCESS,
          Notify.Placement.TOP_LEFT,
          Notify.TEMPLATES.Template2,
          res.message
          ,
          ''
        );
        Notify.showNotify(notifyConfig);
      }else{
        const notifyConfig = new NotifyConfig(
          Notify.Type.DANGER,
          Notify.Placement.TOP_LEFT,
          Notify.TEMPLATES.Template2,
          res.message
          ,
          ''
        );
        Notify.showNotify(notifyConfig);
      }

    });
  }

}
