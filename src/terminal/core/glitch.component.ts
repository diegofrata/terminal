import { Component } from '@angular/core';

@Component({
  selector: 'terminal-banner',
  template: '<div class="glitch" [attr.data-text]="text">{{text}}</div> ',
  styles: [
    `
     
    .glitch {
      font-size: 3.5rem;
      position: relative;
    }

    @keyframes noise-anim {
      0% {
        clip: rect(65px, 9999px, 87px, 0);
      }
      5% {
        clip: rect(56px, 9999px, 86px, 0);
      }
      10% {
        clip: rect(82px, 9999px, 89px, 0);
      }
      15% {
        clip: rect(62px, 9999px, 45px, 0);
      }
      20% {
        clip: rect(53px, 9999px, 23px, 0);
      }
      25% {
        clip: rect(26px, 9999px, 79px, 0);
      }
      30% {
        clip: rect(69px, 9999px, 53px, 0);
      }
      35% {
        clip: rect(23px, 9999px, 34px, 0);
      }
      40% {
        clip: rect(95px, 9999px, 41px, 0);
      }
      45% {
        clip: rect(62px, 9999px, 90px, 0);
      }
      50% {
        clip: rect(33px, 9999px, 53px, 0);
      }
      55% {
        clip: rect(45px, 9999px, 32px, 0);
      }
      60% {
        clip: rect(78px, 9999px, 20px, 0);
      }
      65% {
        clip: rect(22px, 9999px, 26px, 0);
      }
      70% {
        clip: rect(64px, 9999px, 40px, 0);
      }
      75% {
        clip: rect(36px, 9999px, 92px, 0);
      }
      80% {
        clip: rect(87px, 9999px, 22px, 0);
      }
      85% {
        clip: rect(8px, 9999px, 47px, 0);
      }
      90% {
        clip: rect(29px, 9999px, 90px, 0);
      }
      95% {
        clip: rect(20px, 9999px, 68px, 0);
      }
      100% {
        clip: rect(92px, 9999px, 73px, 0);
      }
    }
    .glitch:after {
      content: attr(data-text);
      position: absolute;
      left: 2px;
      text-shadow: -1px 0 red;
      top: 0;
      color: white;
      background: black;
      overflow: hidden;
      clip: rect(0, 900px, 0, 0);
      animation: noise-anim 2s infinite linear alternate-reverse;
    }

    @keyframes noise-anim-2 {
      0% {
        clip: rect(16px, 9999px, 91px, 0);
      }
      5% {
        clip: rect(48px, 9999px, 33px, 0);
      }
      10% {
        clip: rect(59px, 9999px, 41px, 0);
      }
      15% {
        clip: rect(19px, 9999px, 21px, 0);
      }
      20% {
        clip: rect(91px, 9999px, 44px, 0);
      }
      25% {
        clip: rect(49px, 9999px, 48px, 0);
      }
      30% {
        clip: rect(11px, 9999px, 68px, 0);
      }
      35% {
        clip: rect(86px, 9999px, 97px, 0);
      }
      40% {
        clip: rect(18px, 9999px, 6px, 0);
      }
      45% {
        clip: rect(98px, 9999px, 85px, 0);
      }
      50% {
        clip: rect(12px, 9999px, 36px, 0);
      }
      55% {
        clip: rect(5px, 9999px, 14px, 0);
      }
      60% {
        clip: rect(75px, 9999px, 23px, 0);
      }
      65% {
        clip: rect(52px, 9999px, 81px, 0);
      }
      70% {
        clip: rect(79px, 9999px, 93px, 0);
      }
      75% {
        clip: rect(49px, 9999px, 29px, 0);
      }
      80% {
        clip: rect(71px, 9999px, 8px, 0);
      }
      85% {
        clip: rect(40px, 9999px, 25px, 0);
      }
      90% {
        clip: rect(82px, 9999px, 77px, 0);
      }
      95% {
        clip: rect(37px, 9999px, 100px, 0);
      }
      100% {
        clip: rect(65px, 9999px, 29px, 0);
      }
    }
    .glitch:before {
      content: attr(data-text);
      position: absolute;
      left: -2px;
      text-shadow: 1px 0 blue;
      top: 0;
      color: white;
      background: black;
      overflow: hidden;
      clip: rect(0, 900px, 0, 0);
      animation: noise-anim-2 3s infinite linear alternate-reverse;
    }
 
    `
  ]
})
export class GlitchComponent {
  text = '';
}