import {
    inject,
    fakeAsync,
    tick,
    TestBed
} from '@angular/core/testing';


import { MockBackend } from '@angular/http/testing';

import {
    Http,
    ConnectionBackend,
    BaseRequestOptions,
    Response,
    ResponseOptions
} from '@angular/http';

import { SporityService } from '../../spotify-service/SpotifyService';
import { SpeedTrap } from '../../models/SpeedTrap';

describe ( 'SpeedTrap', function() {
    it( 'tickets a car at more than 60mph', function() {
        var stubCar = { getSpeed: function() { return 61; } };
        var speedTrap = new SpeedTrap(stubCar);
        speedTrap.ticketCount = 0;
        speedTrap.checkSpeed();
        expect(speedTrap.ticketCount).toEqual(1);
    })
})

