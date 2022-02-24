import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { LOGIN_ERROR } from '../../../../authentication/store/auth.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  @Input() postForm: FormGroup
 
  constructor(public postService: PostService) { }

  ngOnInit(): void {


  }



}
