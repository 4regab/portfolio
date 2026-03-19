"use client";

import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  Media,
  Row,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";

const tagIconMap: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  Python: "python",
  "Next.js": "nextjs",
  React: "react",
  "Node.js": "nodejs",
  Supabase: "supabase",
  MCP: "mcp",
};

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  tags?: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  tags = [],
}) => {
  const mediaColumnStyle = {
    width: "200px",
    minWidth: "200px",
    flexShrink: 0,
    alignSelf: "start",
  } satisfies React.CSSProperties;

  return (
    <Row fillWidth gap="l" s={{ direction: "column" }} vertical="start">
      {images.length > 0 && (
        <Column
          border="neutral-medium"
          radius="m"
          overflow="hidden"
          style={mediaColumnStyle}
          s={{ style: { width: "100%", minWidth: "100%" } }}
        >
          <Media
            radius="m"
            alt={title}
            src={images[0]}
            sizes="200px"
            aspectRatio="16 / 9"
          />
        </Column>
      )}
      <Column flex={5} gap="8" vertical="center" style={{ minWidth: 0 }}>
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-l">
            {title}
          </Heading>
        )}
        {description?.trim() && (
          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
            {description}
          </Text>
        )}
        {tags.length > 0 && (
          <Row gap="8" wrap paddingTop="4">
            {tags.map((tag, i) => (
              <Tag key={i} size="m" prefixIcon={tagIconMap[tag]}>{tag}</Tag>
            ))}
          </Row>
        )}
        <Flex gap="24" wrap paddingTop="8">
          {content?.trim() && (
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={href}
            >
              <Text variant="body-default-s">View overview</Text>
            </SmartLink>
          )}
          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
            >
              <Text variant="body-default-s">View project</Text>
            </SmartLink>
          )}
        </Flex>
      </Column>
    </Row>
  );
};
