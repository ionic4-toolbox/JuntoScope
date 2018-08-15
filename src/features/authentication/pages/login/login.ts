import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { untilDestroyed } from "ngx-take-until-destroy";
import { map, filter, take } from "rxjs/operators";
import { Subscription } from "rxjs";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { AuthEffects } from "../../store/auth.effects";
import { AppEffects } from "../../../../store/app.effects";
import { AuthActionTypes } from "../../store/auth.actions";
import { ClearErrorAction } from "../../store/auth.actions";
import { AppState } from "../../../../store/app.reducer";
import { PopupService } from "../../../../shared/popup.service";


@IonicPage({
  segment: "LoginPage",
  priority: "high"
})
@Component({
  selector: "app-login",
  templateUrl: "./login.html"
})
export class LoginPage implements OnInit {
  agreeForm: FormGroup;
  
  // loading$ = this.authFacade.uiState$.pipe(
  //   map(uiState => uiState === AuthUiState.LOADING)
  // );

  authError$ = this.authEffects.error$;

  hasAgreed = false;

  user$ = this.authEffects.user$;

  redirectSubs: Subscription;

  private loginRedirect$ = this.appEffects.authRedirect$.pipe(
    untilDestroyed(this),
    filter(redirectUrl => !!redirectUrl),
    map(navOptions => {
      const query = this.navParams.get("query");
      if (query && query.returnUrl) {
        navOptions.path = [query.returnUrl];
      }

      return navOptions;
    })
  );

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private appEffects: AppEffects,
    private authEffects: AuthEffects,
    private navCtrl: NavController,
    private navParams: NavParams,
    private actions$: Actions,
    private popupSvc: PopupService
  ) {
    this.redirectSubs = this.actions$
      .ofType(AuthActionTypes.AUTHENTICATED)
      .subscribe(() => {
        this.redirectSubs.unsubscribe();
        this.navCtrl.setRoot("DashboardPage");
      });

      this.authError$.subscribe(error => {
        if (error) {
          this.popupSvc.simpleAlert("Uh Oh!", error, "OK");
          this.store.dispatch(new ClearErrorAction());
        }
      }); 
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.agreeForm = this.fb.group({
      agree: [false, Validators.required]
    });

    this.agreeForm.valueChanges.subscribe(data => {
      this.hasAgreed = data.agree;
    });
  }

  goToTerms() {
    this.navCtrl.push("TermsPage");
  }

  goToPrivacy() {
    this.navCtrl.push("PrivacyPage");
  }

  googleLogin() {
    this.authEffects.googleLogin();
  }

  facebookLogin() {
    this.authEffects.facebookLogin();

    this.loginRedirect$.pipe(take(1)).subscribe(navOptions => {});
  }

  twitterLogin() {
    this.authEffects.twitterLogin();

    this.loginRedirect$.pipe(take(1)).subscribe(navOptions => {});
  }
}
