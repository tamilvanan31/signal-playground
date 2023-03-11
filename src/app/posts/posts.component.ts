import { JsonPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { PostsService } from "./posts.service";

@Component({
    selector: 'posts',
    template: `
        <pre>
            {{post() | json}}
        </pre>
    `,
    standalone: true,
    imports: [JsonPipe]
})

export class PostsComponent implements OnInit {
    constructor(private postService: PostsService) { }

    post: any = this.postService.getPosts();
    ngOnInit() {
        console.log(this.post);
        console.warn(typeof this.post);
    }
}