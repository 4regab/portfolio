import {
  Avatar,
  Column,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { home, about, person, social, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero: avatar + name/role/intro */}
      <Row
        fillWidth
        gap="l"
        marginBottom="xl"
        s={{ direction: "column", horizontal: "center" }}
        vertical="center"
      >
        {about.avatar.display && (
          <Column horizontal="center" gap="m">
            <Avatar src={person.avatar} size="xl" />
          </Column>
        )}
        <Column
          fillWidth
          gap="8"
          s={{
            horizontal: "center",
            style: {
              alignItems: "center",
              textAlign: "center",
            },
          }}
        >
          <Heading variant="display-strong-l">{person.name}</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {person.role}
          </Text>
          {about.intro.display && (
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              marginTop="8"
            >
              {about.intro.description}
            </Text>
          )}
          <Row gap="8" wrap paddingTop="12" s={{ horizontal: "center" }}>
            {social
              .filter((item) => item.essential)
              .map((item) =>
                item.link ? (
                  <IconButton
                    key={item.name}
                    size="l"
                    href={item.link}
                    icon={item.icon}
                    variant="secondary"
                  />
                ) : null,
              )}
            {person.languages &&
              person.languages.length > 0 &&
              person.languages.map((language, index) => (
                <Tag key={index} size="l">
                  {language}
                </Tag>
              ))}
          </Row>
        </Column>
      </Row>

      {/* Content sections */}
      <Column fillWidth>
        {about.work.display && (
          <>
            <Heading
              as="h2"
              id={about.work.title}
              variant="display-strong-s"
              marginBottom="m"
            >
              {about.work.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {about.work.experiences.map((experience, index) => (
                <Column
                  key={`${experience.company}-${experience.role}-${index}`}
                  fillWidth
                >
                  <Row
                    fillWidth
                    horizontal="between"
                    vertical="end"
                    marginBottom="4"
                  >
                    <Text id={experience.company} variant="heading-strong-l">
                      {experience.company}
                    </Text>
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {experience.timeframe}
                    </Text>
                  </Row>
                  <Text
                    variant="body-default-s"
                    onBackground="brand-weak"
                    marginBottom="m"
                  >
                    {experience.role}
                  </Text>
                  <Column as="ul" gap="16">
                    {experience.achievements.map(
                      (achievement: React.ReactNode, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ),
                    )}
                  </Column>
                </Column>
              ))}
            </Column>
          </>
        )}

        {about.studies.display && (
          <>
            <Heading
              as="h2"
              id={about.studies.title}
              variant="display-strong-s"
              marginBottom="m"
            >
              {about.studies.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {about.studies.institutions.map((institution, index) => (
                <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                  <Text id={institution.name} variant="heading-strong-l">
                    {institution.name}
                  </Text>
                  <Text
                    variant="heading-default-xs"
                    onBackground="neutral-weak"
                  >
                    {institution.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </>
        )}

        {about.technical.display && (
          <>
            <Heading
              as="h2"
              id={about.technical.title}
              variant="display-strong-s"
              marginBottom="m"
            >
              {about.technical.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {about.technical.skills.map((skill, index) => (
                <Column key={`${skill.title}-${index}`} fillWidth gap="8">
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="8">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag
                          key={`${skill.title}-${tagIndex}`}
                          size="l"
                          prefixIcon={tag.icon}
                        >
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </>
        )}

        {about.certifications?.display && (
          <>
            <Heading
              as="h2"
              id={about.certifications.title}
              variant="display-strong-s"
              marginBottom="m"
            >
              {about.certifications.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {about.certifications.items.map((cert, index) => (
                <Column key={`${cert.name}-${index}`} fillWidth>
                  <Row
                    fillWidth
                    horizontal="between"
                    vertical="end"
                    marginBottom="4"
                  >
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <Text
                          variant="heading-strong-l"
                          onBackground="brand-strong"
                        >
                          {cert.name}
                        </Text>
                        <Icon
                          name="arrowUpRight"
                          size="s"
                          onBackground="brand-strong"
                        />
                      </a>
                    ) : (
                      <Text variant="heading-strong-l">{cert.name}</Text>
                    )}
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {cert.issued}
                    </Text>
                  </Row>
                  <Text variant="body-default-s" onBackground="brand-weak">
                    {cert.issuer}
                  </Text>
                </Column>
              ))}
            </Column>
          </>
        )}
      </Column>
    </Column>
  );
}
