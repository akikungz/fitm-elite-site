"use client";
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor";
import { useMemo } from "react";

import LinkTool, { DefaultLinkToolRender } from '@yoopta/link-tool';
import ActionMenu, { DefaultActionMenuRender } from '@yoopta/action-menu-list';
import Toolbar, { DefaultToolbarRender } from '@yoopta/toolbar';

import { Bold, Italic, CodeMark, Underline, Strike, Highlight } from '@yoopta/marks';

import Paragraph from "@yoopta/paragraph";
import Blockquote from "@yoopta/blockquote";
import Table from "@yoopta/table";
import Divider from "@yoopta/divider";
import Accordion from "@yoopta/accordion";
import Code from "@yoopta/code";
import Embed from "@yoopta/embed";
import Image from "@yoopta/image";
import Link from "@yoopta/link";
import File from "@yoopta/file";
import Callout from "@yoopta/callout";
import Video from "@yoopta/video";
import List from "@yoopta/lists";
import Heading from "@yoopta/headings";

export default function Editor() {
    const editor = useMemo(() => createYooptaEditor(), []);

    return (
        <YooptaEditor
            editor={editor}
            placeholder="Write something..."
            plugins={[
                Paragraph,
                Blockquote,
                Table,
                Divider,
                Accordion,
                Code,
                Embed,
                Image,
                Link,
                File,
                Callout,
                Video,
                List.BulletedList,
                List.NumberedList,
                List.TodoList,
                Heading.HeadingOne,
                Heading.HeadingTwo,
                Heading.HeadingThree,
            ]}
            tools={{
                Toolbar: {
                    tool: Toolbar,
                    render: DefaultToolbarRender,
                },
                ActionMenu: {
                    tool: ActionMenu,
                    render: DefaultActionMenuRender,
                },
                LinkTool: {
                    tool: LinkTool,
                    render: DefaultLinkToolRender,
                },
            }}
            marks={[Bold, Italic, CodeMark, Underline, Strike, Highlight]}
        />
    )
}