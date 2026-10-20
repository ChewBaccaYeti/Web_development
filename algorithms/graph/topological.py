"""
=====================================================================
Topological Sort / Топологическая сортировка
---------------------------------------------------------------------
DAG → линейный порядок (u раньше v для ребра u→v).
Time: O(V + E)
=====================================================================
"""
from collections import deque


def topo_kahn(graph: dict) -> list:
    nodes = list(graph.keys())
    in_degree = {n: 0 for n in nodes}

    for u in nodes:
        for v in graph[u]:
            in_degree[v] = in_degree.get(v, 0) + 1

    queue = deque([n for n in nodes if in_degree[n] == 0])
    order = []

    while queue:
        u = queue.popleft()
        order.append(u)
        for v in graph[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    if len(order) != len(nodes):
        raise ValueError("Graph has a cycle — not a DAG")
    return order


def topo_dfs(graph: dict) -> list:
    visited = set()
    in_stack = set()
    order = []

    def dfs(u):
        if u in in_stack:
            raise ValueError("Cycle detected")
        if u in visited:
            return

        in_stack.add(u)
        for v in graph.get(u, []):
            dfs(v)
        in_stack.discard(u)

        visited.add(u)
        order.append(u)

    for node in graph:
        if node not in visited:
            dfs(node)

    return list(reversed(order))


if __name__ == "__main__":
    graph = {
        "shirt": ["tie", "belt"],
        "tie": ["jacket"],
        "belt": ["jacket"],
        "jacket": [],
        "pants": ["belt", "shoes"],
        "socks": ["shoes"],
        "shoes": [],
    }
    print(topo_kahn(graph))
    print(topo_dfs(graph))
