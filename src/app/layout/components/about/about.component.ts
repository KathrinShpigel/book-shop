import { Component, OnInit, Optional } from '@angular/core';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ConfigOptionsService } from '../../../core/services/config-options.service';
import { ConstantService } from '../../../core/services/constant.service';
import { GeneratorService } from '../../../core/services/generator.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private lsService: LocalStorageService,
    @Optional() private configService: ConfigOptionsService,
    @Optional() private constService: ConstantService,
    @Optional() private generatorService: GeneratorService,
  ) { }

  ngOnInit(): void {
  }

}
