import {CanActivateFn} from "@angular/router";
import {TestBed} from "@angular/core/testing";
import {authenticationGuard} from "./authentication.guard";

describe('AuthenticationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters)=>
    TestBed.runInInjectionContext(()=> authenticationGuard(...guardParameters));

  beforeEach(()=>{
    TestBed.configureTestingModule({});
  });
  it('should be created', () => {
expect(executeGuard).toBeTruthy();
  });
});
