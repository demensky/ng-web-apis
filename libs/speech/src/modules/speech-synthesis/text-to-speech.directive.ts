import {Directive, EventEmitter, inject, Input, OnChanges, Output} from '@angular/core';
import {SPEECH_SYNTHESIS} from '@ng-web-apis/common';

@Directive({
    standalone: true,
    selector: '[waTextToSpeech]',
})
export class TextToSpeechDirective implements OnChanges {
    private readonly speechSynthesisRef = inject(SPEECH_SYNTHESIS);

    @Input('waTextToSpeechPaused')
    paused = false;

    @Input()
    set waTextToSpeech(utterance: SpeechSynthesisUtterance) {
        this.speechSynthesisRef.cancel();
        this.speechSynthesisRef.pause();

        utterance.onerror = e => this.onerror.emit(e);
        utterance.onend = e => this.onend.emit(e);
        utterance.onmark = e => this.onmark.emit(e);
        utterance.onboundary = e => this.onboundary.emit(e);

        this.speechSynthesisRef.speak(utterance);
    }

    @Output('waTextToSpeechError')
    readonly onerror = new EventEmitter<SpeechSynthesisErrorEvent>();

    @Output('waTextToSpeechEnd')
    readonly onend = new EventEmitter<SpeechSynthesisEvent>();

    @Output('waTextToSpeechMark')
    readonly onmark = new EventEmitter<SpeechSynthesisEvent>();

    @Output('waTextToSpeechBoundary')
    readonly onboundary = new EventEmitter<SpeechSynthesisEvent>();

    ngOnChanges(): void {
        if (this.paused) {
            this.speechSynthesisRef.pause();
        } else {
            this.speechSynthesisRef.resume();
        }
    }
}
