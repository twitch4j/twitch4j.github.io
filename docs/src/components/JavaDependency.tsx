import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

export default function JavaDependency(props) {
    const gradleScope = props.scope !== undefined ? props.scope : 'implementation'

    // gradle - groovy
    let gradleCode = `dependencies {
    `+gradleScope+` group: '`+props.group+`', name: '`+props.name+`'
}`
    if (props.version !== undefined) {
        gradleCode = `dependencies {
    `+gradleScope+` group: '`+props.group+`', name: '`+props.name+`', version: '`+props.version+`'
}`
    }

    // gradle - kotlin
    let kotlinCode = `dependencies {
    `+gradleScope+`(group = "`+props.group+`", name = "`+props.name+`")
}`
    if (props.version !== undefined) {
        kotlinCode = `dependencies {
    `+gradleScope+`(group = "`+props.group+`", name = "`+props.name+`", version = "`+props.version+`")
}`
    }

    // maven
    let mavenCode = `<dependency>
    <groupId>`+props.group+`</groupId>
    <artifactId>`+props.name+`</artifactId>
</dependency>`
    if (props.version !== undefined) {
    mavenCode = `<dependency>
    <groupId>`+props.group+`</groupId>
    <artifactId>`+props.name+`</artifactId>
    <version>`+props.version+`</version>
</dependency>`
    }

    return (
        <React.Fragment>
            <Tabs groupId="dependency">
                <TabItem value="gradle-groovy" label={<>Gradle</>}>
                    <CodeBlock language="groovy">{gradleCode}</CodeBlock>
                </TabItem>
                <TabItem value="gradle-kotlin" label={<>Gradle - Kotlin DSL</>}>
                    <CodeBlock language="kotlin">{kotlinCode}</CodeBlock>
                </TabItem>
                <TabItem value="maven" label={<>Maven</>}>
                    <CodeBlock language="xml">{mavenCode}</CodeBlock>
                </TabItem>
            </Tabs>
        </React.Fragment>
    );
}
